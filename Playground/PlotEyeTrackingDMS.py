#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Jan 13 13:23:59 2025

@author: jasonsteffener
"""

import json
from pprint import pprint
import matplotlib.pyplot as plt
import numpy as np

import pandas as pd

fileName = 'Data2.txt'
with open(fileName) as f:
    d = json.load(f)
    f.close()
    pprint(d)
    
    
comp = 11 # 11    
e = d[comp]
f = e['webgazer_data']
x = []
y = []
t = []
for i in f:
    x.append(i['x'])
    y.append(i['y'])
    t.append(i['t'])



data = {'x':x,'y':y,'t':t}
df = pd.DataFrame(data)


plt.plot(x,y)
plt.xlim(100, 900)
plt.ylim(300, 900)
ax = plt.gca()
ax.set_aspect('equal', adjustable='box')
plt.draw()

plt.plot(x,y)
plt.scatter(df['x'],df['y'],s=df['t']/10,alpha = 0.5)
plt.xlim(00, 1200)
plt.ylim(00, 1200)
ax = plt.gca()
ax.set_aspect('equal', adjustable='box')

Target1 = e['webgazer_targets']['#TrackingTarget_1']
Target2 = e['webgazer_targets']['#TrackingTarget_3']
Target3 = e['webgazer_targets']['#TrackingTarget_4']
Target4 = e['webgazer_targets']['#TrackingTarget_5']
plt.plot(Target1['x'],Target1['y'],'rx')
plt.plot(Target2['x'],Target2['y'],'rx')
plt.plot(Target3['x'],Target3['y'],'rx')
plt.plot(Target4['x'],Target4['y'],'rx')

plt.show()


