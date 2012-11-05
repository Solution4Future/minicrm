Ext.define("minicrm.view.Main", {
    extend: 'Ext.tab.Panel',
    xtype: 'mainview',
    requires: [
        'Ext.TitleBar', 'Ext.dataview.NestedList', 'Ext.Label', 'Ext.field.Search',
    ],
    config: {
        //tabBarPosition: 'bottom',
        activeTab: 0,
        
        tabBar: {
            layout: {
                pack: 'center',
                align: 'center'
            },
            docked: 'bottom'
        },
        
        items: [
            // customers tab
            { 
                title: 'Customers',
                iconCls: 'user',

                //styleHtmlContent: true,
                //scrollable: true,
                layout:  {
                    type: 'vbox',
                    align: 'center',
                    pack: 'center'                    
                },

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Customers',
                        layout:  {
                            align: 'center',
                            pack: 'center'                    
                        },                       
                        items: [
                            {
                                xtype: 'searchfield',
                                id: 'searchcustomer',
                                placeHolder: 'Search',
                                name: 'searchfield',
                                align: 'left'
                            },
                            {
                                xtype: 'button',
                                text: 'Add',
                                id: 'customer-add',
                                align: 'right'
                            }
                        ]
                    },
                    {
                        xtype: 'list',
                        id: 'customers',
                        flex: 1,
                        //centered: true,
                        ui: 'round',
                        //fullscreen: true,
                        emptyText: 'no customer to show',
                        width: Ext.os.deviceType == 'Phone' ? null : '85%',
                        //height: '30%',
                        store: 'Customers',
                        itemTpl: '{name}',
                        onItemDisclosure: true
                    }
                    //{
                    //    xtype: 'panel',
                    //    html: 'lorem ipsum'
                    //},

                ]
            },
            // about tab
            {
                title: 'About',
                iconCls: 'info',
                layout:  {
                    type: 'vbox',
                    align: 'center',
                    pack: 'center'                    
                },
                
                styleHtmlContent: true,
                scrollable: true,
                
                html: [
                    '<h1>About MiniCRM</h1>',
                    "Developed by Solution4Future Team<br>",
                    '<a href="http://www.solution4future.com">http://www.solution4future.com</a><br>',
                    "Programming by Leszek Żarna",
                ].join("")
            }
        ]
    }
});
