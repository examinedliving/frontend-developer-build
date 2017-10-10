/**
 *  @name essentials
 *  @external job
 *  @description Modifies `job.essentials` object
 */
dg.essentials = {
  "heading": "Essentials",
  "items": [{
    "item": ["Locations ", job.essentials.locations]
  }, {
    "item": ["Employment ", job.essentials.employment]
  }, {
    "item": ["Experience ", job.essentials.experience.join(' cat ')]
  }, {
    "item": ["Start Date ", Date(job.essentials.startdate)]
  }, {
    "item": ["Company Size ", job.essentials.companysize.splitAtCaps()]
  }, {
    "item": ["Team Size", "<em>min:</em> " + job.essentials.teamsize.min + "  |  <em>max:</em> " + job.essentials.teamsize.max]
  }]
};
/**
 *  @name essentials_img
 *  @external job
 *  @description Data for `job.essentials` template image section
 */
dg.essentials_img = {
  "img": true,
  "imgsrc": "img/macbook.svg"
};