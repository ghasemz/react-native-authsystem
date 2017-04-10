package com.rasanak;

import android.app.Application;
import android.os.Bundle;
import android.util.Log;

import com.babisoft.ReactNativeLocalization.ReactNativeLocalizationPackage;
import com.brentvatne.react.ReactVideoPackage;
import com.facebook.react.ReactApplication;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.burnweb.rnsendintent.RNSendIntentPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.react.modules.network.ReactCookieJarContainer;
import com.facebook.stetho.BuildConfig;
import com.facebook.stetho.Stetho;
import com.i18n.reactnativei18n.ReactNativeI18n;
import com.rnfs.RNFSPackage;
import okhttp3.OkHttpClient;
import com.facebook.react.modules.network.OkHttpClientProvider;
import com.facebook.stetho.okhttp3.StethoInterceptor;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class MainApplication extends Application implements ReactApplication {

    @Override
    public void onCreate() {
        super.onCreate();



        /*Stetho.initializeWithDefaults(this);

        Stetho.initializeWithDefaults(this);
        OkHttpClient client = new OkHttpClient.Builder()
                .connectTimeout(0, TimeUnit.MILLISECONDS)
                .readTimeout(0, TimeUnit.MILLISECONDS)
                .writeTimeout(0, TimeUnit.MILLISECONDS)
                .cookieJar(new ReactCookieJarContainer())
                .addNetworkInterceptor(new StethoInterceptor())
                .build();
        OkHttpClientProvider.replaceOkHttpClient(client);*/


    }

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

        @Override
        protected boolean getUseDeveloperSupport() {
            return true;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
            new RCTCameraPackage(),
            new RNSendIntentPackage(),
                    new ReactNativeI18n(),
                    new ReactVideoPackage(),
                    new ReactNativeLocalizationPackage(),
                    new RNFSPackage()
            );
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }
}
