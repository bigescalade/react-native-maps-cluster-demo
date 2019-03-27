package com.rnmapscluster.NativeView;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

public class NativeViewManager extends SimpleViewManager<NativeView> {
    @Override
    public String getName() {
        return "NativeView";
    }

    @Override
    public NativeView createViewInstance(ThemedReactContext context) {
        return new NativeView(context);
    }
}
