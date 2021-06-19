// main index.js

import { NativeModules, Platform } from "react-native";

const { Svprogresshud } = NativeModules;
if (Platform.OS == "android") Svprogresshud.init();

class SVProgressHUD {
  static show(status) {
    Svprogresshud.show(status);
  }

  static showProgress(progress = 0.0, status) {
    Svprogresshud.showProgress(progress, status);
  }

  static async dismiss(delay = 0.0) {
    Svprogresshud.dismiss(delay);
  }

  static async showInfo(status) {
    Svprogresshud.showInfo(status);
  }

  static async showSuccess(status) {
    Svprogresshud.showSuccess(status);
  }

  static async showError(status) {
    Svprogresshud.showError(status);
  }

  static async setDefaultStyle(style = "light") {
    Svprogresshud.setDefaultStyle(style);
  }

  static async setDefaultMaskType(maskType = "none") {
    Svprogresshud.setDefaultMaskType(maskType);
  }

  static async setDefaultAnimationType(type = "flat") {
    Svprogresshud.setDefaultAnimationType(type);
  }

  static async setMinimumSize(width = 0.0, height = 0.0) {
    Svprogresshud.setMinimumSize(width, height);
  }

  static async setRingThickness(ringThickness = 2.0) {
    Svprogresshud.setRingThickness(ringThickness);
  }

  static async setRingRadius(radius = 18.0) {
    Svprogresshud.setRingRadius(radius);
  }

  static async setRingNoTextRadius(radius = 24.0) {
    Svprogresshud.setRingNoTextRadius(radius);
  }

  static async setCornerRadius(cornerRadius = 14.0) {
    Svprogresshud.setCornerRadius(cornerRadius);
  }

  static async setBorderColor(color) {
    Svprogresshud.setBorderColor(color);
  }

  static async setBorderWidth(width = 0.0) {
    Svprogresshud.setBorderWidth(width);
  }

  static async setForegroundColor(color = "#000") {
    Svprogresshud.setForegroundColor(color);
  }

  static async setForegroundImageColor(color = "#000") {
    Svprogresshud.setForegroundImageColor(color);
  }

  static async setBackgroundColor(color = "#fff") {
    Svprogresshud.setBackgroundColor(color);
  }

  static async setBackgroundLayerColor(color = "rgba(255,255,255,0.4)") {
    Svprogresshud.setBackgroundLayerColor(color);
  }

  static async setImageViewSize(width = 28.0, height = 28.0) {
    Svprogresshud.setImageViewSize(width, height);
  }

  static async setShouldTintImages(shouldTintImages = true) {
    Svprogresshud.setShouldTintImages(shouldTintImages);
  }

  static async setMinimumDismissTimeInterval(interval = 5000.0) {
    return Svprogresshud.setMinimumDismissTimeInterval(interval);
  }

  static async setMaximumDismissTimeInterval(interval = 15000.0) {
    return Svprogresshud.setMaximumDismissTimeInterval(interval);
  }

  static async setFadeInAnimationDuration(duration = 150.0) {
    return Svprogresshud.setFadeInAnimationDuration(duration);
  }

  static async setFadeOutAnimationDuration(duration = 150.0) {
    return Svprogresshud.setFadeOutAnimationDuration(duration);
  }

  static async setHapticsEnabled(hapticsEnabled = false) {
    return Svprogresshud.setHapticsEnabled(hapticsEnabled);
  }
}

export default SVProgressHUD;
