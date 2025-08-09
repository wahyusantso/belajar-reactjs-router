# Gunakan Node.js image
FROM node:22-alpine

# Tentukan working directory di dalam container
WORKDIR /app

# Salin package.json dan package-lock.json dulu (agar cache build optimal)
COPY package*.json .

# Install dependencies
RUN npm install

# Salin seluruh kode project
COPY . .

# Pastikan server Vite listen ke semua host (agar bisa diakses dari luar container)
# Hot reload aktif dengan polling
ENV CHOKIDAR_USEPOLLING=true

# Port yang digunakan Vite (sesuaikan dengan vite.config.js)
EXPOSE 3001

# Jalankan Vite dev server
CMD ["sh", "-c", "npm run dev -- --host"]