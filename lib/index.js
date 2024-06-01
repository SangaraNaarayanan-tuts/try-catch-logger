const logger = require('../logger');

function checkFuncType (funcToExe) {
  let functionType = Object.prototype.toString.call(funcToExe);
  functionType = functionType.slice(8, -1);
  return functionType;
}

async function tryCatchLoggerWrap (funcToExe, logParams, ...params) {
  if (typeof (funcToExe) !== 'function') {
    return {
      status: false,
      error: 'first positional argument should be an function check the parameters passed.'
    };
  }
  const startTime = Date.now();
  const childFuncName = funcToExe.name !== '' ? funcToExe.name : 'Anonymous';
  try {
    logger.info(`[${childFuncName}] The function has started processing.`);

    if (logParams) {
      logger.info(`[${childFuncName}] The parameter received: `);
      console.log(JSON.stringify(params, null, 5));
    }
    const functionType = checkFuncType(funcToExe);
    let fnResponse;
    switch (functionType) {
      case 'Promise' || 'AsyncFunction':
        fnResponse = await funcToExe(...params);
        return {
          status: true,
          data: fnResponse
        };
      default:
        fnResponse = funcToExe(...params);
        return {
          status: true,
          data: fnResponse
        };
    }
  } catch (error) {
    logger.error(`[${childFuncName}] Error occured while processing:`, error);
    return {
      status: false,
      error: error
    };
  } finally {
    const endTime = Date.now();
    logger.info(`[${childFuncName}] The function completed the processing.`);
    logger.info(`[${childFuncName}] Total time for execution: ${endTime - startTime} ms.`);
  }
}

module.exports = tryCatchLoggerWrap;
