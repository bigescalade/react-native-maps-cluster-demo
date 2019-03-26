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
    UILabel *label = [[UILabel alloc] initWithFrame: CGRectMake(0, 0, 200, 50)];
    label.text = @"iOS View Controller";
    label.textColor = [UIColor blackColor];
    label.backgroundColor = [UIColor blackColor];
    [self addSubview:label];
  }
  
  return self;
}

@end
