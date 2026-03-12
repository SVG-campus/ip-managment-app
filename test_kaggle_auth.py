import urllib.request
import urllib.error
import base64

# --- Replace with your full KGAT token ---
KGAT_TOKEN = "KGAT_e06eb2b39b06f212f80241069e36d606" 
USERNAME = "seasthaalores"

def test_legacy_v1_auth():
    print("=== Test 1: Trying Legacy Method (Username + Key) ===")
    url = "https://www.kaggle.com/api/v1/datasets/list"
    
    # Simulating KAGGLE_USERNAME and KAGGLE_KEY (Basic Auth)
    auth_string = f"{USERNAME}:{KGAT_TOKEN}"
    base64_auth = base64.b64encode(auth_string.encode('ascii')).decode('ascii')
    
    req = urllib.request.Request(url)
    req.add_header("Authorization", f"Basic {base64_auth}")
    
    try:
        urllib.request.urlopen(req)
        print("✅ SUCCESS: Legacy method worked.\n")
    except urllib.error.HTTPError as e:
        print(f"❌ FAILED: Legacy method returned {e.code} ({e.reason}) - This is your 401 error!\n")

def test_new_v2_auth():
    print("=== Test 2: Trying New Method (KAGGLE_API_TOKEN) ===")
    url = "https://www.kaggle.com/api/v1/datasets/list"
    
    # Simulating KAGGLE_API_TOKEN (Bearer Auth)
    req = urllib.request.Request(url)
    req.add_header("Authorization", f"Bearer {KGAT_TOKEN}")
    
    try:
        urllib.request.urlopen(req)
        print("✅ SUCCESS: Bearer Token method worked! Kaggle successfully authenticated.\n")
    except urllib.error.HTTPError as e:
        print(f"❌ FAILED: V2 method returned {e.code} ({e.reason})\n")

if __name__ == "__main__":
    test_legacy_v1_auth()
    test_new_v2_auth()
