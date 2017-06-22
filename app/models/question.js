import DS from 'ember-data';

export default DS.Model.extend({
  candidate_id:DS.attr('string'),
  question1: DS.attr('string')
});
