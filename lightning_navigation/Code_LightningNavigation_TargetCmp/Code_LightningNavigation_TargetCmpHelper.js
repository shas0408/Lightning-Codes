({
    doInitHelper : function(component, event) {
        console.log("Code_LightningNavigation_TargetCmpHelper :: doInitHelper :: Helper method invoked");
        console.log("Code_LightningNavigation_TargetCmpHelper :: doInitHelper :: Getting pageReference :: " + cmp.get("v.pageReference"));
        var pageReference = component.get("v.pageReference");
        console.log("Code_LightningNavigation_TargetCmpHelper :: doInitHelper :: Getting firstName attribute from pageReference...");
        component.set("v.firstName", pageReference.state.c__firstName);
        console.log("Code_LightningNavigation_TargetCmpHelper :: doInitHelper :: v.firstName :: " + component.get("v.firstName"));
    }
})