//
//  NativeView.m
//  RNMapsCluster
//
//  Created by Rob Cunning on 26/3/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "NativeView.h"

@implementation NativeView

- (id) initWithFrame:(CGRect)frame {
  if ((self = [super initWithFrame:frame])) {
    UILabel *label = [[UILabel alloc] initWithFrame: CGRectMake(0, 0, 300, 50)];
    label.center = self.center;
    label.textAlignment = NSTextAlignmentCenter;
    label.text = @"I'm written in objective-c!";
    label.textColor = [UIColor blackColor];
    [self addSubview:label];
  }
  
  return self;
}

@end
