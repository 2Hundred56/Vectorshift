import math
import random

def write(s): # print() sends as a signal and cannot be used for debugging
    print("console.log('%s');"%s)

class Processing:
    def __init__(self):
        pass
    def waitForSignal(self,signal):
        while True:
            if raw_input("") == signal:
                break
    def start(self):
        self.waitForSignal("start-process")
        while 1:
            self.update()
    def update(self):
        self.waitForSignal("sig-startupdate")
        write("hello")
        print("$end")

