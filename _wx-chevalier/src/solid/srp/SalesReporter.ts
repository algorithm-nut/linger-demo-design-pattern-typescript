import SalesRepository from './SalesRepository';
import ISalesOutput from './ISalesOutput';

class SalesReporter {
  private repo: SalesRepository;

  constructor(repo: SalesRepository) {
    this.repo = repo;
  }
  between<T>(start: number, end: number, formatter: ISalesOutput<T>): T {
    const sales = this.repo.between(start, end);
    return formatter.output(sales);
  }
}

export default SalesReporter;
