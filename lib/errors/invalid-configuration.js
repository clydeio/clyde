"use strict";

var util = require("util");

var InvalidConfiguration = function InvalidConfiguration(message, extra) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.message = message ? message : InvalidConfiguration.NO_PROVIDER_MESSAGE;
  this.extra = extra;
};

InvalidConfiguration.EMPTY_MESSAGE = "Invalid configuration. No valid configuration were found.";
InvalidConfiguration.NO_PROVIDER_MESSAGE = "Invalid configuration. At least one provider is required.";
InvalidConfiguration.INVALID_FILTER_MESSAGE = "Invalid filter configuration.";
InvalidConfiguration.INVALID_PROVIDER_MESSAGE = "Invalid provider configuration.";

util.inherits(InvalidConfiguration, Error);

module.exports = InvalidConfiguration;