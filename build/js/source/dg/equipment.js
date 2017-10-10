/**
 *  @name equipment
 *  @external job
 *  @description Modifies `job.equipment` object
 */
dg.equipment = {
  "heading": "Job Equipment",
  "items": [{
    "item": ["Operating Systems", job.equipment.operatingsystem.join(' or ')]
  }, {
    "item": ["Machine Type", job.equipment.computer]
  }]
};