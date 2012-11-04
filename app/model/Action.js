Ext.define('minicrm.model.Action', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['id', 'type', 'description', 'clientId2' ],
        //belongsTo: 'minicrm.model.Customer',
        //proxy: {
        //    type: 'rest',
        //    url: 'http://example-crm.herokuapp.com/clients/1/actions',
        //    autoLoad: true,
        //    reader: {
        //        type: 'json',
        //        rootProperty: 'actions',
        //    }
        //}
    }
});