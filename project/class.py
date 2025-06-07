from sklearn import tree

X = [
    [181, 80, 44], [177, 70, 43], [160, 60, 38], [154, 54, 37],
    [166, 65, 40], [190, 90, 47], [175, 64, 39], [177, 70, 40],
    [159, 55, 37], [171, 75, 42]
]

Y = [
    'male', 'male', 'female', 'female', 'female',
    'male', 'male', 'male', 'female', 'male'
]

clf = tree.DecisionTreeClassifier()
clf = clf.fit(X, Y)

# Dynamic inputs from JS
height = {{height}}
weight = {{weight}}
shoe = {{shoe}}

prediction = clf.predict([[height, weight, shoe]])
prediction[0]
