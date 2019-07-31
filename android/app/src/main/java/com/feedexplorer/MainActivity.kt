package com.feedexplorer

import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate

class MainActivity : ReactActivity() {

    private var environment: Environment = Environment("pxq7kudd57xc", "55595")

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val intent = intent
        val extras = intent.extras

        environment = if (extras != null) {
            val apiKey = extras.getString("apiKey", null)
            val appId = extras.getString("appId", null)

            Environment(apiKey, appId)
        }else{
            Environment("pxq7kudd57xc", "55595")
        }
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */


    override fun getMainComponentName(): String? {
        return "FeedExplorer"
    }

    override fun createReactActivityDelegate(): ReactActivityDelegate {
        return object : ReactActivityDelegate(this, mainComponentName) {
            override fun getLaunchOptions(): Bundle? {
                val initialProps = Bundle()
                initialProps.putString("apiKey", environment.apiKey)
                initialProps.putString("appId", environment.appId)
                initialProps.putString("token", environment.token)
                return initialProps
            }
        }
    }
}
