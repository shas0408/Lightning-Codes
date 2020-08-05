({
    doInitHelper : function(component, event) {
        console.log("Code_LightningNavigation_SourceCmpHelper :: doInitHelper :: Helper method invoked");
    },
    
    navigateHelper : function(component, event) {
        console.log("Code_LightningNavigation_SourceCmpHelper :: navigateHelper :: Helper method invoked");
        component.find("navigationService").navigate({
            "type": "standard__component",
            "attributes": {
                "componentName": "c__Code_LightningNavigation_TargetCmp"    
            },    
            "state": {
                "firstName": component.get("v.firstName")
            }
        }, true);
    }
})