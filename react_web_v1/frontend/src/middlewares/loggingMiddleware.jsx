// Configuração básica do nível de log
const LOG_LEVELS = {
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR'
};

// Configuração padrão
let config = {
  logLevel: LOG_LEVELS.INFO,
  enableConsole: true,
  enableStorage: false,
  storageKey: 'app_logs'
};

// Formatar mensagem de log com timestamp
const formatLogMessage = (level, message, data) => {
  const timestamp = new Date().toISOString();
  return {
    timestamp,
    level,
    message,
    data
  };
};

// Salvar logs no localStorage
const saveLog = (logEntry) => {
  if (!config.enableStorage) return;
  
  try {
    const logs = JSON.parse(localStorage.getItem(config.storageKey) || '[]');
    logs.push(logEntry);
    // Limitar o número de logs armazenados (exemplo: máximo 100)
    const limitedLogs = logs.slice(-100);
    localStorage.setItem(config.storageKey, JSON.stringify(limitedLogs));
  } catch (error) {
    console.error('Error saving log to localStorage:', error);
  }
};

// Configuração do logger
export const configureLogger = (newConfig) => {
  config = { ...config, ...newConfig };
};

// Funções de log para diferentes níveis
export const logger = {
  debug: (message, data) => {
    if (Object.values(LOG_LEVELS).indexOf(config.logLevel) <= Object.values(LOG_LEVELS).indexOf(LOG_LEVELS.DEBUG)) {
      const logEntry = formatLogMessage(LOG_LEVELS.DEBUG, message, data);
      if (config.enableConsole) console.debug(`[DEBUG] ${logEntry.timestamp}: ${message}`, data || '');
      saveLog(logEntry);
    }
  },
  
  info: (message, data) => {
    if (Object.values(LOG_LEVELS).indexOf(config.logLevel) <= Object.values(LOG_LEVELS).indexOf(LOG_LEVELS.INFO)) {
      const logEntry = formatLogMessage(LOG_LEVELS.INFO, message, data);
      if (config.enableConsole) console.info(`[INFO] ${logEntry.timestamp}: ${message}`, data || '');
      saveLog(logEntry);
    }
  },
  
  warn: (message, data) => {
    if (Object.values(LOG_LEVELS).indexOf(config.logLevel) <= Object.values(LOG_LEVELS).indexOf(LOG_LEVELS.WARN)) {
      const logEntry = formatLogMessage(LOG_LEVELS.WARN, message, data);
      if (config.enableConsole) console.warn(`[WARN] ${logEntry.timestamp}: ${message}`, data || '');
      saveLog(logEntry);
    }
  },
  
  error: (message, data) => {
    if (Object.values(LOG_LEVELS).indexOf(config.logLevel) <= Object.values(LOG_LEVELS).indexOf(LOG_LEVELS.ERROR)) {
      const logEntry = formatLogMessage(LOG_LEVELS.ERROR, message, data);
      if (config.enableConsole) console.error(`[ERROR] ${logEntry.timestamp}: ${message}`, data || '');
      saveLog(logEntry);
    }
  }
};

// Middleware para registrar navegação entre rotas
export const routeLoggingMiddleware = (location) => {
  logger.info(`Navegação para: ${location.pathname}${location.search}`, {
    pathname: location.pathname,
    search: location.search,
    hash: location.hash
  });
};

// Middleware para logging de API requests
export const apiLoggingMiddleware = async (url, options, next) => {
  const startTime = Date.now();
  logger.debug(`API Request: ${options.method || 'GET'} ${url}`, {
    url,
    method: options.method || 'GET',
    headers: options.headers,
    body: options.body
  });
  
  try {
    const response = await next(url, options);
    const duration = Date.now() - startTime;
    
    logger.debug(`API Response: ${options.method || 'GET'} ${url}`, {
      url,
      status: response.status,
      duration: `${duration}ms`,
      headers: Object.fromEntries([...response.headers.entries()])
    });
    
    return response;
  } catch (error) {
    const duration = Date.now() - startTime;
    
    logger.error(`API Error: ${options.method || 'GET'} ${url}`, {
      url,
      error: error.message,
      duration: `${duration}ms`,
      stack: error.stack
    });
    
    throw error;
  }
};

// Função para obter todos os logs armazenados
export const getLogs = () => {
  try {
    return JSON.parse(localStorage.getItem(config.storageKey) || '[]');
  } catch (error) {
    console.error('Error retrieving logs:', error);
    return [];
  }
};

// Função para limpar todos os logs
export const clearLogs = () => {
  localStorage.removeItem(config.storageKey);
};

export default logger;