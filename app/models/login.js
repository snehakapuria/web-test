import DS from 'ember-data';
const{
  attr
} = DS;

export default DS.Model.extend({
  userName:attr('string'),
  password:attr('string')
});
