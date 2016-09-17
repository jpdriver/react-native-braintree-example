//
//  RNBraintree.h
//  MyBraintreeDemo
//
//  Created by Alan Wong.
//  https://github.com/alanhhwong/react-native-braintree/blob/master/iOS/RNBraintree.m
//

#import "RCTBridgeModule.h"
#import "BraintreeCore.h"
#import "BraintreePayPal.h"
#import "BraintreeCard.h"
#import "BraintreeUI.h"

@interface RNBraintree : UIViewController <RCTBridgeModule, BTDropInViewControllerDelegate, BTViewControllerPresentingDelegate>

@property (nonatomic, strong) BTAPIClient *braintreeClient;
@property (nonatomic, strong) UIViewController *reactRoot;

@property (nonatomic, strong) RCTResponseSenderBlock callback;

+ (instancetype)sharedInstance;
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation;

@end
