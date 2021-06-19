// main index.js

import { NativeModules, Platform } from "react-native";

const { Svprogresshud } = NativeModules;
if (Platform.OS == "android") Svprogresshud.init();

const between = (x, min, max) => {
  return x >= min && x <= max;
};

const platformColor = ([R, G, B, a]) => {
  let A = 255;
  if (between(a, 0, 1)) {
    A = Math.round(a * 255);
  } else if (between(a, 0, 255)) {
    A = Math.round(a);
  }
  if (Platform.OS == "android") {
    return (
      ((A & 0xff) << 24) | ((R & 0xff) << 16) | ((G & 0xff) << 8) | (B & 0xff)
    );
  } else {
    return (A << 24) + (R << 16) + (G << 8) + B;
  }
};

class SVProgressHUD {
  static show(status) {
    Svprogresshud.show(status);
  }

  static showProgress(progress = 0.0, status) {
    Svprogresshud.showProgress(progress, status);
  }

  static dismiss(delay = 0.0) {
    Svprogresshud.dismiss(delay);
  }

  static showInfo(status) {
    Svprogresshud.showInfo(status);
  }

  static showSuccess(status) {
    Svprogresshud.showSuccess(status);
  }

  static showError(status) {
    Svprogresshud.showError(status);
  }

  static setDefaultStyle(style = "light") {
    Svprogresshud.setDefaultStyle(style);
  }

  static setDefaultMaskType(maskType = "none") {
    Svprogresshud.setDefaultMaskType(maskType);
  }

  static setDefaultAnimationType(type = "flat") {
    Svprogresshud.setDefaultAnimationType(type);
  }

  static setMinimumSize(width = 0.0, height = 0.0) {
    Svprogresshud.setMinimumSize(width, height);
  }

  static setRingThickness(ringThickness = 2.0) {
    Svprogresshud.setRingThickness(ringThickness);
  }

  static setRingRadius(radius = 18.0) {
    Svprogresshud.setRingRadius(radius);
  }

  static setRingNoTextRadius(radius = 24.0) {
    Svprogresshud.setRingNoTextRadius(radius);
  }

  static setCornerRadius(cornerRadius = 14.0) {
    Svprogresshud.setCornerRadius(cornerRadius);
  }

  static setBorderColor(color) {
    Svprogresshud.setBorderColor(platformColor(color));
  }

  static setBorderWidth(width = 0.0) {
    Svprogresshud.setBorderWidth(width);
  }

  static setForegroundColor(color) {
    Svprogresshud.setForegroundColor(platformColor(color));
  }

  static setForegroundImageColor(color) {
    Svprogresshud.setForegroundImageColor(platformColor(color));
  }

  static setBackgroundColor(color) {
    Svprogresshud.setBackgroundColor(platformColor(color));
  }

  static setBackgroundLayerColor(color) {
    Svprogresshud.setBackgroundLayerColor(platformColor(color));
  }

  static setImageViewSize(width = 28.0, height = 28.0) {
    Svprogresshud.setImageViewSize(width, height);
  }

  static setShouldTintImages(shouldTintImages = true) {
    Svprogresshud.setShouldTintImages(shouldTintImages);
  }

  static setMinimumDismissTimeInterval(interval = 5000.0) {
    Svprogresshud.setMinimumDismissTimeInterval(interval);
  }

  static setMaximumDismissTimeInterval(interval = 15000.0) {
    Svprogresshud.setMaximumDismissTimeInterval(interval);
  }

  static setFadeInAnimationDuration(duration = 150.0) {
    Svprogresshud.setFadeInAnimationDuration(duration);
  }

  static setFadeOutAnimationDuration(duration = 150.0) {
    Svprogresshud.setFadeOutAnimationDuration(duration);
  }

  static setHapticsEnabled(hapticsEnabled = false) {
    Svprogresshud.setHapticsEnabled(hapticsEnabled);
  }
}

export default SVProgressHUD;
