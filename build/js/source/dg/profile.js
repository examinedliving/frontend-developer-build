/**
 *  @name profile
 *  @external job
 *  @description Modifies `job.profile` object
 */
dg.profile = {
  "heading": "Job Profile",
  "items": [{
    "item": ["New Features", job.profile.newfeatures + '%']
  }, {
    "item": ["Client Support", job.profile.clientsupport + '%']
  }, {
    "item": ["Documentation", job.profile.documentation + '%']
  }, {
    "item": ["Maintenance", job.profile.maintenance + '%']
  }, {
    "item": ["Meetings", job.profile.meetings + '%']
  }]
};
/**
 *  @name profile_img
 *  @external job
 *  @description Data for profile template image section
 */
dg.profile_img = {
  "img": true,
  "imgsrc": "img/calendar.svg"
};