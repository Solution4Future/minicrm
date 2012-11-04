Ext.define('minicrm.model.Customer', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['id', 'name', 'address', 'phone'],
        //hasMany: { model: 'minicrm.model.Action',  name: 'actions' },
        proxy: {
            type: 'rest',
            url: 'http://example-crm.herokuapp.com/clients',
            autoLoad: true,
            reader: {
                type: 'json',
                rootProperty: 'clients',
            }
        }
    },
    blah: function() { return 'blahstring'}
});