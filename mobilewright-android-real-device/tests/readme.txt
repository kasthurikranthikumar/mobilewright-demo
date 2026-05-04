# Android Real Device Setup

## Step 1: Connect Your Device (Mandatory)

1. Connect your Android device to your laptop using a USB-C cable
2. On your device, go to Settings > About Phone and tap "Build Number" 7 times to enable Developer Mode
3. Go to Settings > Developer Options and enable "USB Debugging"
4. When prompted on your device, tap "Allow" to authorize USB debugging

## Step 2: Install ADB (Mandatory)

Option A - Android Studio (full IDE):
  Download from https://developer.android.com/studio

Option B - Platform Tools only (lightweight):
  brew install android-platform-tools

Verify installation:
  which adb          # confirms adb is on your PATH
  adb version        # shows installed version
  adb devices        # lists connected devices — your device should appear as "device"

If your device shows as "unauthorized", unplug and replug the cable, then tap "Allow" on the device prompt.
 
## Step 3: Mirror Your Device Screen (Optional)

To view your device screen live on your Mac:

  brew install scrcpy
  scrcpy

