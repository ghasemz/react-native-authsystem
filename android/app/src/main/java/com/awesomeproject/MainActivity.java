package com.awesomeproject;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.brentvatne.react.ReactVideoPackage;

import java.util.Arrays;
import java.util.List;

import io.neson.react.notification.NotificationPackage;    // <- Add this line
import com.babisoft.ReactNativeLocalization.ReactNativeLocalizationPackage;
import com.rnfs.RNFSPackage;  // <--- import

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "AwesomeProject";
    }

    /**
     * Returns whether dev mode should be enabled.
     * This enables e.g. the dev menu.
     */
    @Override
    protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

    /**
     * A list of packages used by the app. If the app uses additional views
     * or modules besides the default ones, add more packages here.
     */
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                new NotificationPackage(this),
                new MainReactPackage(),
                new ReactVideoPackage(),
                new ReactNativeLocalizationPackage(),
                new RNFSPackage()
        );
    }
}
