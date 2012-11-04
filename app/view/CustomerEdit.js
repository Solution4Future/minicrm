Ext.define("minicrm.view.CustomerEdit", {
    extend: 'Ext.form.Panel',
    xtype: 'customer-edit',
    requires: [
        'Ext.TitleBar', 
    ],
    config: {
        modal: true,
        hideOnMaskTap: true,
        centered: true,
        width: '80%',
        heigth: '300',
        
        layout:  {
            type: 'fit',
            align: 'center',
            //pack: 'center'                    
        },
        
        items: [
            //{
            //    docked: 'top',
            //    xtype: 'titlebar',
            //    title: 'Customer',
            //    layout:  {
            //        //align: 'center',
            //        //pack: 'center'
            //    },
            //    items: [
            //        {
            //            xtype: 'button',
            //            align: 'left',
            //            text: 'Back',
            //            ui: 'back',
            //            id: 'customer-edit-back'
            //        },
            //    ]
            //}, //end toolbar
            {
                xtype: 'textfield',
                name: 'name',
                label: 'Name',
                autoCapitalize: true,
                required: true,
                clearIcon: true
            },
            {
                xtype: 'textfield',
                name: 'address',
                label: 'Address',
                required: true,
                clearIcon: true
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
