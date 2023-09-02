using System;
using System.Collections.Generic;

namespace OnlineDairyWorld2.Models;

public partial class Category
{
    public int CategoryId { get; set; }

    public string? CategoryName { get; set; }

    public virtual ICollection<StockDetail> StockDetails { get; set; } = new List<StockDetail>();
}
