Ext.define("minicrm.view.CustomerEdit", {
    extend: 'Ext.form.Panel',
    xtype: 'customer-edit',
    requires: [
        'Ext.TitleBar', 
    ],
    config: {
        fullscreen: true,
        modal: true,
        hideOnMaskTap: true,
        centered: true,
        minWidth: '80%',
        minHeight: '50%',
        
        layout:  {
            type: 'card',
            align: 'center',
            pack: 'center'                    
        },
        
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Customer',
                layout:  {
                    //align: 'center',
                    //pack: 'center'
                },
                items: [
                    {
                        xtype: 'button',
                        align: 'right',
                        text: 'Save',
                        ui: 'action',
                        id: 'customer-edit-ok'
                    },
                ]
            }, //end toolbar
            {
                xtype: 'fieldset',
                //title: 'Customer',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'name',
                        label: 'Name',
                        autoCapitalize: true,
                        required: true,
                        clearIcon: true,
                        placeHolder: 'enter name'
                    },
                    {
                        xtype: 'textfield',
                        name: 'address',
                        label: 'Address',
                        required: true,
                        clearIcon: true,
                        placeHolder: 'enter address'
                    }                                    
                ]
            }
        ],
        record: null,
        store: null
    },
    
    updateRecord: function(rec) {
        console.log(rec);
        console.log(rec.blah());
        //console.log(rec.actions());
        if (rec) {
            this.down('#customer-info-panel').setData(rec.data);
            var actionlist = this.down('#actions');
            var actionstore = Ext.create('Ext.data.Store', {
                model: 'minicrm.model.Action',
                proxy: {
                    type: 'rest',
                    url: 'http://example-crm.herokuapp.com/clients/'+rec.data.id+'/actions',
                    reader: {
                        type: 'json',
                        rootProperty: 'actions',
                       }
                }
            });
            actionstore.load();
            actionlist.setStore(actionstore);
        }
    }

});
