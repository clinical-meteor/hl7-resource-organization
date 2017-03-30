Package.describe({
  name: 'clinical:hl7-resource-organization',
  version: '1.3.2',
  summary: 'HL7 FHIR Resource - Organization',
  git: 'https://github.com/clinical-meteor/hl7-resource-organization',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('meteor-platform');
  api.use('mongo');
  api.use('aldeed:simple-schema@1.3.3');
  api.use('aldeed:collection2@2.5.0');
  api.use('simple:json-routes@2.1.0');
  api.use('clinical:fhir-vault-server@0.0.3', ['client', 'server'], {weak: true});

  api.use('clinical:base-model@1.3.5');
  api.use('clinical:hl7-resource-datatypes@0.6.8');
  api.use('clinical:hl7-resource-bundle@1.3.10');

  api.addFiles('lib/hl7-resource-organization.js', ['client', 'server']);
  api.addFiles('server/rest.js', 'server');
  api.addFiles('server/initialize.js', 'server');

  api.export('Organization');
  api.export('Organizations');
  api.export('OrganizationSchema');
});
