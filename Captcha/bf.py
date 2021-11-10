from PIL import Image
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys
import time
import pytesseract as tess
tess.pytesseract.tesseract_cmd = r"C:\Users\humey\AppData\Local\Programs\Tesseract-OCR\tesseract.exe"

name = "admin"
email = "admin@admin.com"
password = "adminadmin"

web = webdriver.Chrome(ChromeDriverManager().install())

web.maximize_window()
web.get('file:///C:/Users/humey/OneDrive/Masaüstü/lab4ödev/login-page/index.html')
time.sleep(2)
uname = web.find_element_by_name("name")
uname.send_keys(name)
time.sleep(2)
uemail = web.find_element_by_name("email")
uemail.send_keys(email)
time.sleep(2)
upassword = web.find_element_by_name("password")
upassword.send_keys(password)
captcha = web.find_element_by_xpath("/html/body/div/div/form/div[4]/img")
captcha.screenshot('./image.png')
img = Image.open("image.png")
text = tess.image_to_string(img).replace(' ', '')
time.sleep(1)
enter_captcha = web.find_element_by_name("capt")
enter_captcha.send_keys(text)
time.sleep(2)
login = web.find_element_by_class_name('login-button')
login.send_keys(Keys.ENTER)
time.sleep(5)
print(text)
