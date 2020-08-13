def on_gesture_shake():
    basic.show_string("" + (text_list.remove_at(randint(0, len(text_list) - 1))))
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

text_list: List[str] = []
text_list = ["Fun with French",
    "Helping the Elderly",
    "The Whale Radar",
    "Alarm system"]