const logger = require('../logger');

function checkFuncType (funcToExe) {
  let functionType = Object.prototype.toString.call(funcToExe);
  functionType = functionType.slice(8, -1);
  return functionType;
}

async function tryCatchLoggerWrap (funcToExe, ...params) {
  if (typeof (funcToExe) !== 'function') {
    return {
      status: false,
      error: 'first positional argument should be an function check the parameters passed.'
    };
  }
  const startTime = Date.now();
  const childFuncName = funcToExe.name !== '' ? funcToExe.name : 'Anonymous';
  try {
    if (params) {
      logger.info(`[${childFuncName}] The parameters received: `);
      console.log(JSON.stringify(params, null, 5));
    }
    logger.info(`[${childFuncName}] The function has started processing.`);

    const functionType = checkFuncType(funcToExe);
    let fnResponse;
    if (functionType === 'Promise' || functionType === 'AsyncFunction') {
      fnResponse = await funcToExe(...params);
    } else {
      fnResponse = funcToExe(...params);
    }
    return {
      status: true,
      data: fnResponse
    };
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
