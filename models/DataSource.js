export default class DataSource {
  static SPEED_DISTRIBUTION = [
    { cpm: 0, percentage: 0.1 },
    { cpm: 30, percentage: 0.1 },
    { cpm: 40, percentage: 0.3 },
    { cpm: 50, percentage: 0.9 },
    { cpm: 60, percentage: 1.2 },
    { cpm: 70, percentage: 1.5 },
    { cpm: 80, percentage: 1.9 },
    { cpm: 90, percentage: 2.4 },
    { cpm: 100, percentage: 2.8 },
    { cpm: 110, percentage: 3.2 },
    { cpm: 120, percentage: 3.6 },
    { cpm: 130, percentage: 3.9 },
    { cpm: 140, percentage: 4 },
    { cpm: 150, percentage: 4.1 },
    { cpm: 160, percentage: 4.1 },
    { cpm: 170, percentage: 4.1 },
    { cpm: 180, percentage: 4 },
    { cpm: 190, percentage: 3.9 },
    { cpm: 200, percentage: 3.7 },
    { cpm: 210, percentage: 3.6 },
    { cpm: 220, percentage: 3.4 },
    { cpm: 230, percentage: 3.2 },
    { cpm: 240, percentage: 3 },
    { cpm: 250, percentage: 2.9 },
    { cpm: 260, percentage: 2.7 },
    { cpm: 270, percentage: 2.5 },
    { cpm: 280, percentage: 2.4 },
    { cpm: 290, percentage: 2.3 },
    { cpm: 300, percentage: 2.1 },
    { cpm: 310, percentage: 2 },
    { cpm: 320, percentage: 1.8 },
    { cpm: 330, percentage: 1.7 },
    { cpm: 340, percentage: 1.6 },
    { cpm: 350, percentage: 1.5 },
    { cpm: 360, percentage: 1.4 },
    { cpm: 370, percentage: 1.3 },
    { cpm: 380, percentage: 1.2 },
    { cpm: 390, percentage: 1.1 },
    { cpm: 400, percentage: 1 },
    { cpm: 410, percentage: 0.9 },
    { cpm: 420, percentage: 0.8 },
    { cpm: 430, percentage: 0.7 },
    { cpm: 440, percentage: 0.7 },
    { cpm: 450, percentage: 0.6 },
    { cpm: 460, percentage: 0.5 },
    { cpm: 470, percentage: 0.5 },
    { cpm: 480, percentage: 0.4 },
    { cpm: 490, percentage: 0.4 },
    { cpm: 500, percentage: 0.3 },
    { cpm: 510, percentage: 0.3 },
    { cpm: 520, percentage: 0.2 },
    { cpm: 530, percentage: 0.2 },
    { cpm: 540, percentage: 0.2 },
    { cpm: 550, percentage: 0.06 },
    { cpm: 560, percentage: 0.06 },
    { cpm: 570, percentage: 0.06 },
    { cpm: 580, percentage: 0.06 },
    { cpm: 590, percentage: 0.05 },
    { cpm: 600, percentage: 0.05 },
    { cpm: 610, percentage: 0.05 },
    { cpm: 620, percentage: 0.05 },
    { cpm: 630, percentage: 0.05 },
    { cpm: 640, percentage: 0.05 },
    { cpm: 650, percentage: 0.05 },
    { cpm: 660, percentage: 0.04 },
    { cpm: 670, percentage: 0.04 },
    { cpm: 680, percentage: 0.04 },
    { cpm: 690, percentage: 0.04 },
    { cpm: 700, percentage: 0.04 },
  ].sort((a, b) => a.cpm - b.cpm);
}
