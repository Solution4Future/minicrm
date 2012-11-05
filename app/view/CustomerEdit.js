Ext.define("minicrm.view.CustomerEdit", {
    extend: 'Ext.form.Panel',
    xtype: 'customer-edit',
    requires: [
        'Ext.TitleBar', 'Ext.form.FieldSet',
    ],
    config: {
        id: 'customer-edit-form',
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
                        placeHolder: 'enter name',
                        id: 'customereditname'
                    },
                    {
                        xtype: 'textfield',
                        name: 'address',
                        label: 'Address',
                        required: true,
                        clearIcon: true,
                        placeHolder: 'enter address',
                        id: 'customereditaddress'
                    }                                    
                ]
            }
        ],
        record: null,
        store: null
    },
    
    updateRecord: function(rec) {
        if (rec) {
            this.setRecord(rec);
            //this.setValues(rec.data);
        }
    }

});
