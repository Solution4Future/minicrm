Ext.define('minicrm.store.Customers', {
    extend: 'Ext.data.Store',
    config: {
        model: 'minicrm.model.Customer',
        autoLoad: true,
    }
});
