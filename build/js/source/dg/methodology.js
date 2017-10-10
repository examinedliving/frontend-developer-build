/**
 *  @name methodology
 *  @external job
 *  @description Modifies `job.methodology` object
 */
dg.methodology = {
  "heading": "Our Methodology",
  "imgsrc": "",
  "items": [{
    "item": ["Code Reviews", job.methodology.codereviews.funnyBoolean()]
  }, {
    "item": ["Prototyping", job.methodology.prototyping.funnyBoolean()]
  }, {
    "item": ["Fail Fast", job.methodology.failfast.funnyBoolean()]
  }, {
    "item": ["Unit Tests", job.methodology.unittests.funnyBoolean()]
  }, {
    "item": ["Integration Tests", job.methodology.integrationtests.funnyBoolean()]
  }, {
    "item": ["Build Server", job.methodology.buildserver.splitAtCaps()]
  }, {
    "item": ["Static Code Analysis", job.methodology.staticcodeanalysis.splitAtCaps()]
  }, {
    "item": ["Version Control", job.methodology.versioncontrol]
  }, {
    "item": ["Issue Tracker", job.methodology.issuetracker]
  }, {
    "item": ["Standups", job.methodology.standups.funnyBoolean()]
  }, {
    "item": ["Quick Start", job.methodology.quickstart.funnyBoolean()]
  }, {
    "item": ["Commit On Day One", job.methodology.commitondayone.funnyBoolean()]
  }]
};