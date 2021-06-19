// SvprogresshudModule.java

package com.reactlibrary;

import android.app.Activity;
import android.graphics.Color;
import android.util.Log;

import androidx.annotation.ColorInt;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.Promise;

import com.reactlibrary.svprogresshud.SVProgressHUD;
import com.reactlibrary.svprogresshud.SVProgressHUDAnimationType;
import com.reactlibrary.svprogresshud.SVProgressHUDDismissCompletion;
import com.reactlibrary.svprogresshud.SVProgressHUDMaskType;
import com.reactlibrary.svprogresshud.SVProgressHUDStyle;

public class SvprogresshudModule extends ReactContextBaseJavaModule {
    private static final String LOADING = "LOADING";
    private final ReactApplicationContext reactContext;
    private SVProgressHUD svProgressHUD;
    private Activity activity;

    private int reactNativeColor(int color) {
        int A = (color >> 24) & 0xff; // or color >>> 24
        int R = (color >> 16) & 0xff;
        int G = (color >>  8) & 0xff;
        int B = (color      ) & 0xff;
        Log.e("A", String.valueOf(A));
        Log.e("A", String.valueOf(A));
        Log.e("R", String.valueOf(R));
        Log.e("G", String.valueOf(G));
        Log.e("B", String.valueOf(B));
        return Color.argb(A,R,G,B);
    }

    public SvprogresshudModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;

    }

    @Override
    public String getName() {
        return "Svprogresshud";
    }

    @ReactMethod
    private void init() {
        if (this.svProgressHUD == null) {
            this.activity = getCurrentActivity();
            this.svProgressHUD = new SVProgressHUD(this.activity);
        }
    }

    @ReactMethod
    private void show(String status) {
        if (status == null) status = LOADING;
        svProgressHUD.showWithStatus(status);
    }

    @ReactMethod
    private void dismiss(float delay) {
        svProgressHUD.dismissWithDelay(delay > 0 ? (delay / 1000f) : 0);
    }

    @ReactMethod
    private void showProgress(float progress, String status) {
        if (status == null) status = LOADING;
        svProgressHUD.showProgress(progress, status);
    }

    @ReactMethod
    private void showInfo(String status) {
        if (status == null) status = LOADING;
        svProgressHUD.showInfoWithStatus(status);
    }

    @ReactMethod
    private void showSuccess(String status) {
        if (status == null) status = LOADING;
        svProgressHUD.showSuccessWithStatus(status);
    }

    @ReactMethod
    private void showError(String status) {
        if (status == null) status = LOADING;
        svProgressHUD.showErrorWithStatus(status);
    }

    @ReactMethod
    private void setDefaultStyle(String style) {
        svProgressHUD.setDefaultStyle(SVProgressHUDStyle.fromString(style));
    }

    @ReactMethod
    private void setDefaultMaskType(String maskType) {
        svProgressHUD.setDefaultMaskType(SVProgressHUDMaskType.fromString(maskType));
    }

    @ReactMethod
    private void setDefaultAnimationType(String type) {
        svProgressHUD.setDefaultAnimationType(SVProgressHUDAnimationType.fromString(type));
    }

    @ReactMethod
    private void setMinimumSize(float width, float height) {
        svProgressHUD.setMinimumSize(width, height);
    }

    @ReactMethod
    private void setRingThickness(float ringThickness) {
        svProgressHUD.setRingThickness(ringThickness);
    }

    @ReactMethod
    private void setRingRadius(float radius) {
        svProgressHUD.setRingRadius(radius);
    }

    @ReactMethod
    private void setRingNoTextRadius(float radius) {
        svProgressHUD.setRingNoTextRadius(radius);
    }

    @ReactMethod
    private void setCornerRadius(float cornerRadius) {
        svProgressHUD.setCornerRadius(cornerRadius);
    }

    @ReactMethod
    private void setBorderColor(int color) {
        svProgressHUD.setBorderColor(color);
    }

    @ReactMethod
    private void setBorderWidth(float width) {
        svProgressHUD.setBorderWidth(width);
    }

    @ReactMethod
    private void setForegroundColor(int color) {
        svProgressHUD.setForegroundColor(color);
    }

    @ReactMethod
    private void setForegroundImageColor(int color) {
        svProgressHUD.setForegroundImageColor(color);
    }

    @ReactMethod
    private void setBackgroundColor(int color) {
        svProgressHUD.setBackgroundColor(color);
    }

    @ReactMethod
    private void setBackgroundLayerColor(int color) {
        svProgressHUD.setBackgroundLayerColor(color);
    }

    @ReactMethod
    public void setImageViewSize(float width, float height) {
        svProgressHUD.setImageViewSize(width, height);
    }

    @ReactMethod
    public void setShouldTintImages(boolean shouldTintImages) {
        svProgressHUD.setShouldTintImages(shouldTintImages);
    }

    @ReactMethod
    public void setMinimumDismissTimeInterval(float interval) {
        svProgressHUD.setMinimumDismissTimeInterval(interval);
    }

    @ReactMethod
    public void setMaximumDismissTimeInterval(float interval) {
        svProgressHUD.setMaximumDismissTimeInterval(interval);
    }

    @ReactMethod
    public void setFadeInAnimationDuration(float duration) {
        svProgressHUD.setFadeInAnimationDuration(duration);
    }

    @ReactMethod
    public void setFadeOutAnimationDuration(float duration) {
        svProgressHUD.setFadeOutAnimationDuration(duration);
    }

    @ReactMethod
    private void setHapticsEnabled(boolean hapticsEnabled) {
        svProgressHUD.setHapticsEnabled(hapticsEnabled);
    }
}
