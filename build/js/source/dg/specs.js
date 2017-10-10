/**
 *  @name specs
 *  @external job
 *  @description Modifies `job.specs` object
 */
dg.specs = {
  "heading": "Job Specs",
  "items": [{
    "item": ["Workload", job.specs.workload]
  }, {
    "item": ["Work Week", job.specs.workweek + ' Hours']
  }, {
    "item": ["Schedule", job.specs.schedule]
  }, {
    "item": ["Remote Working", job.specs.remote]
  }, {
    "item": ["PTO", job.specs.pto]
  }]
};