module.exports = chroecast => {
	const { Service, Characteristic } = chroecast.hap;



  class CASTER {
		constructor(log, config) {
			this.log = log;
			this.config = config;


      {
  "name": "good-recipe1",
  "cookbook": "cb1",
  "latestVersion": "0.1.0",
  "ids": { "local": "" },
  "versions": {
    "0.1.0": {}}}

      
			this.tvService = new Service.Television(this.config.name, 'television');
			this.tvService
				.setCharacteristic(Characteristic.ConfiguredName, this.config.name);
			this.tvService.getCharacteristic(Characteristic.Active)
				.on('get', this.getPowerStatus.bind(this))
				.on('set', this.setPowerStatus.bind(this));
			this.tvService

    "Outputs": [
        {
          "EntryIDs": ["scripOut"],
          "Weight": "1"
        }
      ]
