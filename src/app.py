
---

## 3️⃣ `src/app.py` (Animation + interface de base)

```python
import sys
import math
import webbrowser
from PyQt5.QtWidgets import QApplication, QMainWindow, QWidget, QPushButton
from PyQt5.QtCore import Qt, QTimer
from PyQt5.QtGui import QPainter, QColor, QFont

class AuraWidget(QWidget):
    def __init__(self):
        super().__init__()
        self.t = 0
        self.timer = QTimer()
        self.timer.timeout.connect(self.update_animation)
        self.timer.start(30)

    def update_animation(self):
        self.t += 0.05
        self.update()

    def paintEvent(self, event):
        painter = QPainter(self)
        painter.setRenderHint(QPainter.Antialiasing)
        w, h = self.width(), self.height()
        cx, cy = w / 2, h / 2

        # Cercles animés
        for i in range(4):
            radius = 50 + i*40 + math.sin(self.t + i) * 20
            color = QColor(0, 150 + i*30, 255 - i*50, 120)
            painter.setBrush(color)
            painter.setPen(Qt.NoPen)
            painter.drawEllipse(int(cx - radius), int(cy - radius), int(radius*2), int(radius*2))

        # Texte
        painter.setPen(QColor(255, 255, 255))
        painter.setFont(QFont("Arial", 24, QFont.Bold))
        painter.drawText(self.rect(), Qt.AlignCenter, "Infomux actif !")

class InfomuxApp(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Infomux")
        self.setGeometry(100, 100, 600, 400)
        self.setCentralWidget(AuraWidget())

        # Bouton pour ouvrir l'IA web
        self.button = QPushButton("Ouvrir l'IA", self)
        self.button.setGeometry(10, 10, 120, 40)
        self.button.clicked.connect(self.open_web_ai)

    def open_web_ai(self):
        webbrowser.open("web_ai/index.html")

def main():
    app = QApplication(sys.argv)
    window = InfomuxApp()
    window.show()
    sys.exit(app.exec_())

if __name__ == "__main__":
    main()

