#import "Wrapper.h"

#define REACTNATIVECOLOR(c) [UIColor colorWithRed:((c>>16)&0xFF)/255.0  green:((c>>8)&0xFF)/255.0 blue: ((c)&0xFF)/255.0 alpha:((c>>24)&0xFF)/255.0]

@implementation Svprogresshud

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(sampleMethod:(NSString *)stringArgument numberParameter:(nonnull NSNumber *)numberArgument callback:(RCTResponseSenderBlock)callback)
{
    // TODO: Implement some actually useful functionality
    callback(@[[NSString stringWithFormat: @"numberArgument: %@ stringArgument: %@", numberArgument, stringArgument]]);
}


RCT_EXPORT_METHOD(show:(NSString *)status)
{
  if (status != (id)[NSNull null] && [status length] > 0) {
      [SVProgressHUD showWithStatus: status];
  } else {
      [SVProgressHUD show];
  }
}

RCT_EXPORT_METHOD(showProgress:(nonnull NSNumber *)progress status:(NSString *)status)
{
  if (status != (id)[NSNull null] && [status length] >0) {
      [SVProgressHUD showProgress: [progress floatValue] status: status];
  } else {
      [SVProgressHUD showProgress: [progress floatValue]];
  }
}

RCT_EXPORT_METHOD(dismiss:(nonnull NSNumber *)delay)
{
  SVProgressHUDDismissCompletion completion =^{};
  if (delay != 0) {
    NSTimeInterval delaySecond = [delay intValue] / 1000;
    [SVProgressHUD dismissWithDelay: delaySecond];
    [SVProgressHUD dismissWithDelay:delaySecond completion:completion];
  } else {
    [SVProgressHUD dismissWithCompletion:completion];
  }
}

RCT_EXPORT_METHOD(showInfo:(NSString *)status)
{
  [SVProgressHUD showInfoWithStatus:status];
 
}

RCT_EXPORT_METHOD(showSuccess:(NSString *)status)
{
  [SVProgressHUD showSuccessWithStatus:status];
}

RCT_EXPORT_METHOD(showError:(NSString *)status)
{
  [SVProgressHUD showErrorWithStatus:status];
}

RCT_EXPORT_METHOD(setDefaultStyle:(NSString *)style)
{
  NSDictionary<NSString*, NSNumber*> *styles = @{
      @"light": [NSNumber numberWithInt:SVProgressHUDStyleLight],
      @"dark": [NSNumber numberWithInt:SVProgressHUDStyleDark],
      @"custom": [NSNumber numberWithInt:SVProgressHUDStyleCustom],
  };
  [SVProgressHUD setDefaultStyle: [[styles valueForKey:style] intValue]];
}

RCT_EXPORT_METHOD(setDefaultMaskType:(NSString *)maskType)
{
  NSDictionary<NSString*, NSNumber*> *maskTypes = @{
      @"none": [NSNumber numberWithInt:SVProgressHUDMaskTypeNone],
      @"clear": [NSNumber numberWithInt:SVProgressHUDMaskTypeClear],
      @"black": [NSNumber numberWithInt:SVProgressHUDMaskTypeBlack],
      @"gradient": [NSNumber numberWithInt:SVProgressHUDMaskTypeGradient],
      @"custom": [NSNumber numberWithInt:SVProgressHUDMaskTypeCustom],
  };
  [SVProgressHUD setDefaultMaskType: [[maskTypes valueForKey:maskType] intValue]];
}


RCT_EXPORT_METHOD(setDefaultAnimationType:(NSString *)type)
{
  NSDictionary<NSString*, NSNumber*> *types = @{
      @"flat": [NSNumber numberWithInt:SVProgressHUDAnimationTypeFlat],
      @"native": [NSNumber numberWithInt:SVProgressHUDAnimationTypeNative],
  };
  [SVProgressHUD setDefaultAnimationType:[[types valueForKey:type] intValue]];
}

RCT_EXPORT_METHOD(setMinimumSize:(nonnull NSNumber *)width height:(nonnull NSNumber*)height)
{
  CGSize minimumSize = CGSizeMake([width floatValue], [height floatValue]);
  [SVProgressHUD setMinimumSize: minimumSize];
}

RCT_EXPORT_METHOD(setRingThickness:(nonnull NSNumber *)ringThickness)
{
  [SVProgressHUD setRingThickness: [ringThickness floatValue]];
}

RCT_EXPORT_METHOD(setRingRadius:(nonnull NSNumber *)radius)
{
  [SVProgressHUD setRingRadius: [radius floatValue]];
}

RCT_EXPORT_METHOD(setRingNoTextRadius:(nonnull NSNumber *)radius)
{
  [SVProgressHUD setRingNoTextRadius: [radius floatValue]];
}

RCT_EXPORT_METHOD(setCornerRadius:(nonnull NSNumber *)cornerRadius)
{
  [SVProgressHUD setCornerRadius: [cornerRadius floatValue]];
}

RCT_EXPORT_METHOD(setBorderColor:(nonnull NSNumber *)color)
{
  [SVProgressHUD setBorderColor:REACTNATIVECOLOR(color.intValue)];
}

RCT_EXPORT_METHOD(setBorderWidth:(nonnull NSNumber *)width)
{
  [SVProgressHUD setBorderWidth: [width floatValue]];
}

RCT_EXPORT_METHOD(setForegroundColor:(nonnull NSNumber *)color)
{
  [SVProgressHUD setForegroundColor:REACTNATIVECOLOR(color.intValue)];
}

RCT_EXPORT_METHOD(setForegroundImageColor:(nonnull NSNumber *)color)
{
  [SVProgressHUD setForegroundImageColor:REACTNATIVECOLOR(color.intValue)];
}

RCT_EXPORT_METHOD(setBackgroundColor:(nonnull NSNumber *)color)
{
  [SVProgressHUD setBackgroundColor:REACTNATIVECOLOR(color.intValue)];
}

RCT_EXPORT_METHOD(setBackgroundLayerColor:(nonnull NSNumber *)color)
{
  [SVProgressHUD setBackgroundLayerColor:REACTNATIVECOLOR(color.intValue)];
}

RCT_EXPORT_METHOD(setImageViewSize:(nonnull NSNumber *)width height:(nonnull NSNumber*)height)
{
  CGSize imageViewSize = CGSizeMake([width floatValue], [height floatValue]);
  [SVProgressHUD setImageViewSize: imageViewSize];
}


RCT_EXPORT_METHOD(setMinimumDismissTimeInterval:(nonnull NSNumber *)interval)
{
  [SVProgressHUD setMinimumDismissTimeInterval: [interval floatValue]];
}

RCT_EXPORT_METHOD(setMaximumDismissTimeInterval:(nonnull NSNumber *)interval)
{
  [SVProgressHUD setMaximumDismissTimeInterval: [interval floatValue]];
}

RCT_EXPORT_METHOD(setFadeInAnimationDuration:(nonnull NSNumber *)duration)
{
  [SVProgressHUD setFadeInAnimationDuration: [duration floatValue]];
}

RCT_EXPORT_METHOD(setFadeOutAnimationDuration:(nonnull NSNumber *)duration)
{
  [SVProgressHUD setFadeOutAnimationDuration: [duration floatValue]];
}

RCT_EXPORT_METHOD(setHapticsEnabled:(NSNumber *)hapticsEnabled)
{
  [SVProgressHUD setFadeOutAnimationDuration: [hapticsEnabled boolValue]];
}

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}
@end
