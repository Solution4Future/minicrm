Ext.define("minicrm.view.Customer", {
    extend: 'Ext.Container',
    xtype: 'customer-show',
    requires: [
        'Ext.TitleBar', 'Ext.dataview.List', 
    ],
    config: {
        
        layout:  {
            type: 'vbox',
            align: 'center',
            //pack: 'center'                    
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
                        align: 'left',
                        text: 'Back',
                        ui: 'back',
                        id: 'customer-back'
                    },
                                        {
                        xtype: 'button',
                        text: 'Edit',
                        //iconCls: 'add',
                        align: 'right',
                        id: 'customer-edit'
                    },
                    {
                        xtype: 'button',
                        align: 'right',
                        text: 'Delete',
                        id: 'customer-del',
                    }
                ]
            }, //end toolbar

            {
                xtype: 'panel',
                //layout: 'vbox',
                //align: 'middle',
                id: 'customer-info-panel',
                //flex: 1,
                margin: 15,
                tpl: ['<table>',
                      '<tr><td><Name  </td><td><b>{name}</b></td></tr>',
                      '<tr><td>Address</td><td>{address}    </td></tr>',
                      '<tr><td>Phone  </td><td>{phone}      </td></tr>',
                      '</table>'
                ].join('')
            },
            {
                //docked: 'top',
                title: 'Actions',
                xtype: 'titlebar',
                width: '100%',
                items: [
                    {
                        xtype: 'button',
                        text: 'add',
                        align: 'right'
                    }
                ]
            },
            {
                xtype: 'list',
                id: 'actions',
                flex: 1,
                ui: 'round',
                emptyText: 'no actions for customer',
                width: Ext.os.deviceType == 'Phone' ? null : '50%',
                //height: '30%',
                store: null,
                itemTpl: '{type} - {description}',
                onItemDisclosure: false
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
