//
//  NativeViewManager.m
//  RNMapsCluster
//
//  Created by Rob Cunning on 26/3/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "NativeView.h"
#import <React/RCTViewManager.h>

@interface NativeViewManager : RCTViewManager
@end

@implementation NativeViewManager

RCT_EXPORT_MODULE(NativeView)

- (UIView *)view {
  return [[NativeView alloc] init];
}

@end
