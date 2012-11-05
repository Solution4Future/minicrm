Ext.define('minicrm.controller.Application', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            main: 'mainview',
            customers: '#customers',
            customerback: '#customer-back',
            searchcustomer: '#searchcustomer',
            delcustomer: '#customer-del',
            editcustomer: '#customer-edit',
            addcustomer: '#customer-add',
            customereditform: '#customer-edit-form',
            customereditsave: '#customer-edit-ok'
        },
        
        control: {
            customers: {
                itemtap: 'onCustomerSelect'
            },
            customerback: {
                tap: 'onCustomerBack'
            },
            searchcustomer: {
                change: 'onSearch'
            },
            delcustomer: {
                tap: 'onCustomerDel'
            },
            editcustomer: {
                tap: 'onCustomerEdit'
            },
            addcustomer: {
                tap: 'onCustomerAdd'
            },
            customereditform: {
                hide: 'onCustomerEditSave'
            },
            customereditsave: {
                tap: 'onCustomerEditSave'
            }

        }
    },
    
    onCustomerSelect: function(list, index, node, record) {
        if (!this.showCustomer) {
            console.log('creating customer view');
            this.showCustomer = Ext.create('minicrm.view.Customer');
            Ext.Viewport.add(this.showCustomer);
        }
        //console.log(record.data);
        //Ext.Msg.alert('tap', 'cust tap');
        this.showCustomer.setRecord(record);
        Ext.Viewport.setActiveItem(this.showCustomer);
        //console.log(record);
    },
    
    onCustomerBack: function() {
        Ext.Viewport.setActiveItem(this.getMain());
    },
    
    onSearch: function(field) {
        var s = Ext.data.StoreManager.lookup('Customers');
        s.clearFilter();
        s.filter('name', field.getValue(), true);
    },
    
    onCustomerDel: function() {
        Ext.Msg.confirm('Attention!', 'Delete customer ?', function(btnid) {
            console.log(btnid);
        });
    },
    
    onCustomerEdit: function() {
        if (!this.customerOverlay) {
            console.log('creating customer overlay');
            this.customerOverlay = Ext.create('minicrm.view.CustomerEdit');
            Ext.Viewport.add(this.customerOverlay);
            
        }
        this.customerOverlay.setRecord(this.showCustomer.getRecord());
        this.customerOverlay.show();
        
    },
    
    onCustomerAdd: function() {
        if (!this.customerOverlay) {
            console.log('creating customer overlay');
            this.customerOverlay = Ext.create('minicrm.view.CustomerEdit');
            Ext.Viewport.add(this.customerOverlay);
            
        }
        this.customerOverlay.show();
    },
    
    onCustomerEditSave: function() {
        console.log('save');
        var w = this.customerOverlay ;
        var record = w.getRecord();
        if (record==null) {
            console.log('new/add');
            v = w.getValues();
            var storec= Ext.data.StoreManager.lookup('Customers');
            storec.add(v);
            //storec.sync();
        }
        if (record!=null) {
            console.log('edit');
            w.setRecord(null);
            //v = w.getValues();
            //var storec= Ext.data.StoreManager.lookup('Customers');
            //storec.add(v);
            //storec.sync();            
        }
        w.hide();
    }
});