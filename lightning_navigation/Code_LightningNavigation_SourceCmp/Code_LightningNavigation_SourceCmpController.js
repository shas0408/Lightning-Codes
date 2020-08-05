({
    doInit : function (component, event, helper) {
        console.log("Code_LightningNavigation_SourceCmpController :: doInit :: Component Initialized");
        console.log("Code_LightningNavigation_SourceCmpController :: doInit :: Executing...");
        console.log("Code_LightningNavigation_SourceCmpController :: doInit :: Invoking Helper Method");
        helper.doInitHelper(component, event);
        console.log("Code_LightningNavigation_SourceCmpController :: doInit :: Execution Complete!");
    },

    navigate : function(component, event, helper) {
        console.log("Code_LightningNavigation_SourceCmpController :: navigate :: Navigate button clicked");
        console.log("Code_LightningNavigation_SourceCmpController :: navigate :: Executing...");
        console.log("Code_LightningNavigation_SourceCmpController :: navigate :: Invoking Helper method");
		helper.navigateHelper(component, event);
        console.log("Code_LightningNavigation_SourceCmpController :: navigate :: Flow back to Controller");
	}
})