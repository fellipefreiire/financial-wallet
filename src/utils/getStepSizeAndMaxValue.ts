import { B, K, M, T } from "./constants"

export function getStepSizeAndMaxValue(value: number) {
  switch (true) {
    case (value >= 500 && value < K):
      return {
        maxValue: K,
        stepSize: 500,
      }
    case (value >= K && value < 2 * K):
      return {
        maxValue: 2 * K,
        stepSize: K,
      }
    case (value >= 2 * K && value < 6 * K):
      return {
        maxValue: 6 * K,
        stepSize: 2 * K,
      }
    case (value >= 6 * K && value < 10 * K):
      return {
        maxValue: 10 * K,
        stepSize: 3 * K,
      }
    case (value >= 10 * K && value < 40 * K):
      return {
        maxValue: 40 * K,
        stepSize: 10 * K,
      }
    case (value >= 40 * K && value < 100 * K):
      return {
        maxValue: 100 * K,
        stepSize: 20 * K,
      }
    case (value >= 100 * K && value < 200 * K):
      return {
        maxValue: 200 * K,
        stepSize: 100 * K,
      }
    case (value >= 200 * K && value < 300 * K):
      return {
        maxValue: 300 * K,
        stepSize: 100 * K,
      }
    case (value >= 300 * K && value < 600 * K):
      return {
        maxValue: 600 * K,
        stepSize: 200 * K,
      }
    case (value >= 600 * K && value < 1 * M):
      return {
        maxValue: 1 * M,
        stepSize: 200 * K,
      }
    case (value >= 1 * M && value < 2 * M):
      return {
        maxValue: 2 * M,
        stepSize: 1 * M,
      }
    case (value >= 2 * M && value < 6 * M):
      return {
        maxValue: 6 * M,
        stepSize: 2 * M,
      }
    case (value >= 6 * M && value < 10 * M):
      return {
        maxValue: 10 * M,
        stepSize: 3 * M,
      }
    case (value >= 10 * M && value < 40 * M):
      return {
        maxValue: 40 * M,
        stepSize: 10 * M,
      }
    case (value >= 40 * M && value < 100 * M):
      return {
        maxValue: 100 * M,
        stepSize: 20 * M,
      }
    case (value >= 100 * M && value < 200 * M):
      return {
        maxValue: 200 * M,
        stepSize: 100 * M,
      }
    case (value >= 200 * M && value < 300 * M):
      return {
        maxValue: 300 * M,
        stepSize: 100 * M,
      }
    case (value >= 300 * M && value < 600 * M):
      return {
        maxValue: 600 * M,
        stepSize: 200 * M,
      }
    case (value >= 600 * M && value < 1 * B):
      return {
        maxValue: 1 * B,
        stepSize: 200 * M,
      }
    case (value >= 1 * B && value < 2 * B):
      return {
        maxValue: 2 * B,
        stepSize: 1 * B,
      }
    case (value >= 2 * B && value < 6 * B):
      return {
        maxValue: 6 * B,
        stepSize: 2 * B,
      }
    case (value >= 6 * B && value < 10 * B):
      return {
        maxValue: 10 * B,
        stepSize: 3 * B,
      }
    case (value >= 10 * B && value < 40 * B):
      return {
        maxValue: 40 * B,
        stepSize: 10 * B,
      }
    case (value >= 40 * B && value < 100 * B):
      return {
        maxValue: 100 * B,
        stepSize: 20 * B,
      }
    case (value >= 100 * B && value < 200 * B):
      return {
        maxValue: 200 * B,
        stepSize: 100 * B,
      }
    case (value >= 200 * B && value < 300 * B):
      return {
        maxValue: 300 * B,
        stepSize: 100 * B,
      }
    case (value >= 300 * B && value < 600 * B):
      return {
        maxValue: 600 * B,
        stepSize: 200 * B,
      }
    case (value >= 600 * B && value < 1 * T):
      return {
        maxValue: 1 * T,
        stepSize: 200 * B,
      }
    default:
      return {
        maxValue: 500,
        stepSize: 100,
      }
  }
}