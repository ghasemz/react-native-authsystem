package com.awesomeproject;

import android.os.Bundle;
import android.util.Log;
import com.facebook.react.ReactActivity;
import com.i18n.reactnativei18n.ReactNativeI18n;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.brentvatne.react.ReactVideoPackage;
import com.facebook.react.modules.network.ReactCookieJarContainer;
import com.facebook.stetho.Stetho;
import okhttp3.OkHttpClient;
import com.facebook.react.modules.network.OkHttpClientProvider;
import com.facebook.stetho.okhttp3.StethoInterceptor;
import java.util.concurrent.TimeUnit;



import java.io.IOException;
import java.util.Arrays;
import java.util.List;


import io.neson.react.notification.NotificationPackage;    // <- Add this line
import com.babisoft.ReactNativeLocalization.ReactNativeLocalizationPackage;
import com.rnfs.RNFSPackage;  // <--- import

public class MainActivity extends ReactActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Stetho.initializeWithDefaults(this);

        Stetho.initializeWithDefaults(this);
        OkHttpClient client = new OkHttpClient.Builder()
                .connectTimeout(0, TimeUnit.MILLISECONDS)
                .readTimeout(0, TimeUnit.MILLISECONDS)
                .writeTimeout(0, TimeUnit.MILLISECONDS)
                .cookieJar(new ReactCookieJarContainer())
                .addNetworkInterceptor(new StethoInterceptor())
                .build();
        OkHttpClientProvider.replaceOkHttpClient(client);


    }

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
            new ReactNativeI18n(),
                new ReactVideoPackage(),
                new ReactNativeLocalizationPackage(),
                new RNFSPackage()
        );
    }
}
