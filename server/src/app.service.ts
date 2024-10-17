import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return (`
        <!doctype html>
          <html>
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <script src="https://cdn.tailwindcss.com"></script>
            </head>
            <body>
              <div class="h-screen w-screen bg-black flex items-center justify-center">
                <div style="width: 800px" class="text-gray-100 text-center">
                  <h1 class="text-5xl font-bold">HEALTH CHECK !</h1>
                  <p class="mt-8">Application is running</p>
                  <p class="mt-2">${new Date()}</p>
                </div>
              </div>
            </body>
          </html>`
    )
  }
}
