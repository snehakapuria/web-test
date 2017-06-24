import DS from 'ember-data';

export default DS.Model.extend({
  candidate_id:DS.attr('string'),
  question1: DS.attr('string'),
  question2: DS.attr('string'),
  question3: DS.attr('string'),
  question4: DS.attr('string'),
  question5: DS.attr('string')
});
